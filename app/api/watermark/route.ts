import { NextRequest } from 'next/server';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const imageUrl = searchParams.get('url');

    if (!imageUrl) {
        return new Response('Missing image URL', { status: 400 });
    }

    try {
        // Resolve absolute path from public directory
        const publicPath = path.join(process.cwd(), 'public');
        const relativePath = imageUrl.startsWith('/') ? imageUrl.substring(1) : imageUrl;
        const imagePath = path.join(publicPath, relativePath);

        if (!fs.existsSync(imagePath)) {
            console.error(`File not found: ${imagePath}`);
            return new Response('Image not found', { status: 404 });
        }

        const imageBuffer = fs.readFileSync(imagePath);
        const imageMetadata = await sharp(imageBuffer).metadata();

        if (!imageMetadata.width || !imageMetadata.height) {
            return new Response('Invalid image metadata', { status: 500 });
        }

        // Load and process the designcare logo
        const logoPath = path.join(publicPath, 'images/designcare-logo.svg');
        if (!fs.existsSync(logoPath)) {
            console.error('Logo file not found:', logoPath);
            return new Response('Logo file not found', { status: 404 });
        }

        const logoContent = fs.readFileSync(logoPath, 'utf8');
        // Clean up and prepare paths - force white fill for watermark visibility
        const innerContent = logoContent
            .replace(/<svg[^>]*>/, '')
            .replace(/<\/svg>/, '')
            .replace(/fill="[^"]*"/g, 'fill="white"')
            .trim();

        const logoWidth = Math.floor(imageMetadata.width * 0.4);
        const logoHeight = Math.floor(logoWidth * (45 / 300)); // Maintain original SVG aspect ratio (300:45)

        // Create a proper SVG wrapper with correct namespace
        const svgWrapper = `
            <svg width="${imageMetadata.width}" height="${imageMetadata.height}" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.12">
                    <g transform="translate(${(imageMetadata.width - logoWidth) / 2}, ${(imageMetadata.height - logoHeight) / 2}) rotate(-20, ${logoWidth / 2}, ${logoHeight / 2}) scale(${logoWidth / 300})">
                        ${innerContent}
                    </g>
                </g>
            </svg>
        `;

        // Process with sharp
        const watermarkedImageBuffer = await sharp(imageBuffer)
            .composite([
                {
                    input: Buffer.from(svgWrapper),
                    top: 0,
                    left: 0,
                },
            ])
            .webp({ quality: 85 })
            .toBuffer();

        // Return standard Response for binary data handling
        return new Response(watermarkedImageBuffer as any, {
            headers: {
                'Content-Type': 'image/webp',
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error: any) {
        console.error('Watermark API Error:', error);
        return new Response('Error processing image', { status: 500 });
    }
}
