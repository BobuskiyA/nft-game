/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  sassOptions: {
    prependData: `@import "src/styles/utils/_variables.scss";
                  @import "src/styles/utils/_mixins.scss";`
  }
}
