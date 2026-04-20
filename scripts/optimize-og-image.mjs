import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = process.cwd()
const inputPath = path.join(ROOT, 'public', 'ceg-index.png')
const outputPath = path.join(ROOT, 'public', 'ceg-index.jpg')

async function main() {
  await fs.access(inputPath)

  // 1200x630 is the common OG image size (1.91:1).
  // "contain" avoids unexpected cropping; adds padding if needed.
  await sharp(inputPath)
    .resize(1200, 630, {
      fit: 'contain',
      background: { r: 2, g: 6, b: 23, alpha: 1 }, // slate-950-ish
      withoutEnlargement: true,
    })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(outputPath)

  const [inStat, outStat] = await Promise.all([
    fs.stat(inputPath),
    fs.stat(outputPath),
  ])

  // eslint-disable-next-line no-console
  console.log(
    `Wrote ${path.relative(ROOT, outputPath)} (${Math.round(outStat.size / 1024)} KB) from ${Math.round(inStat.size / 1024)} KB`
  )
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exitCode = 1
})

