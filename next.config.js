/** GitHub Pages(https://altdmfk.github.io/portfolio_v1/) 정적 배포용 설정 */
const basePath = '/portfolio_v1';

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
