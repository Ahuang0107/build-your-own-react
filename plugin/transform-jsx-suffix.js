module.exports = function () {
    return {
        visitor: {
            ImportDeclaration(path) {
                const sourceRaw = path.node.source.extra.raw
                path.node.source.extra.raw =
                    sourceRaw.replace(/.jsx\"$/, '.js\"').replace(/.jsx\'$/, '.js\'')
            }
        }
    }
}
