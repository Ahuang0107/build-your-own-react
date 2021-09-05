module.exports = function () {
    return {
        visitor: {
            ImportDeclaration(path) {
                const sourceRaw = path.node.source.extra.raw
                if (sourceRaw.match(/\"$/) && !sourceRaw.match(/.js|jsx\"$/)) {
                    path.node.source.extra.raw =
                        sourceRaw.slice(0, -1).concat(".js\"")
                }
            }
        }
    }
}
