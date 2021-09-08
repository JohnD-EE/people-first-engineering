const protocol = {
    name: 'Leadership',
    ref: 'PFE-3',
    keyName: 'leadership',
    status: 'draft', //draft, review, accepted, deprecated, abandoned
    intent: [], //why is this needed
    definitions: [], //nothing should be ambiguous
    overview: [], //context, big picture scenarios
    sections: [
        {
            name: 'Distributed Leadership',
            paragraphs: [
                'Leaders MUST be encouraged to emerge naturally, wherever there is need.',
                'Leaders SHOULD be high in competency for the situation, formal status MUST NOT be a barrier.',
                'Leadership MAY be temporary, as informal and natural temporary hierarchy emerges.',
                'Leadership SHOULD be contextual. The right leader for the conditions.',
                'Leadership SHOULD NOT be centralised.'
            ]
        },
        {
            name: 'Support',
            paragraphs: [
                'Leaders SHOULD show you that they believe in your potential'
            ],
        },
    ],
    conclusions: [],
    appendix: [],
    references: [],
    acknowledgements: []
}

export default {
    protocol
}