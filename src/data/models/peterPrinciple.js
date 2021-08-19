const model = {
    name: 'Peter Principle',
    ref: 'peter-principle',
    keyName: 'peter-principle',
    status: 'draft', //draft, review, accepted
    intent: [], //why is this needed
    definitions: [], //nothing should be ambiguous
    overview: [], //context, big picture scenarios
    sections: [
        {
            name: 'Section 1',
            paragraphs: [],
            behaviourTable: {}
        },
        {
            name: 'Section 2',
        },
    ],
    whenToUse: [],
    conclusions: [],
    references: []
}

export default {
    model
}