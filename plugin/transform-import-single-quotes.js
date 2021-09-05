module.exports = function () {
    return {
        visitor: {
            ImportDeclaration(path) {
                let sourceRaw = path.node.source.extra.raw
                path.node.source.extra.raw =
                    sourceRaw.replace(/\'/, '\"').replace(/\'/, '\"')
            }
        }
    }
}
