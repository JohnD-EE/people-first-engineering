const model = {
    name: 'First Principles',
    ref: 'first-principles',
    keyName: 'first-principles',
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