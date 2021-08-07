const protocol = {
    name: 'Information',
    ref: 'PFE-7',
    keyName: 'information',
    status: 'draft', //draft, review, accepted, deprecated, abandoned
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
    conclusions: [],
    appendix: [],
    resources: [
        { description: '', site: '', url: ''}
    ],
    acknowledgements: []
}

export default {
    protocol
}