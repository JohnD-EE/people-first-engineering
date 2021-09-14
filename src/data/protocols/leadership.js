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
            name: 'Power',
            paragraphs: [
                'Leadership MUST NOT be limited to high status.',
                'Leadership through influence and competence, regardless of status, MUST be encouraged.',
                'Leaders MUST NOT manipulate people\'s perceptions to acheive outcomes.',
                'Leaders MUST NOT engage in political maneovres to enhance their power at the expnse of others.',
                'Hierarchical progression MUST be encouraged through non-manipulative, non-coercive, merit-based measures.'
            ],
        },
        {
            name: 'Information',
            paragraphs: [
                'Leaders SHOULD be truth-seekers and truth-sharers.',
                'Leaders MUST NOT hold on to information to serve their own interests.',
                'Leaders SHOULD dissemenate truthful interpretations of information to those who need to make information based decisions.',
            ],
        },
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