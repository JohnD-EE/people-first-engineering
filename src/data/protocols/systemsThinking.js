const protocol = {
    name: 'Systems Thinking',
    ref: 'PFE-4',
    keyName: 'systemsThinking',
    status: 'draft', //draft, review, accepted, deprecated, abandoned
    intent: [
        'The intent is to adopt habitual ways of nuanced thinking about complex problems and solutions.  As humans we are attracted to simple cause and effect explanations rather than zooming out to grapple with the ambiguities of the bigger picture.  By seeing the our world as systems, with a sensitivity to circular interdependencies, we can consider the holistic impact of our decisions.  Systems thinking moves us away from polarising \'black and white\' short-term perspectives to deeper, more inclusive, and wiser analysis of situations.'
    ], //why is this needed
    definitions: [], //nothing should be ambiguous
    overview: [], //context, big picture scenarios
    sections: [
        {
            name: 'Time Preference',
            paragraphs: [
                'Analysis of problems SHOULD consider the human bias and cultural influence towards high time preference (short-termism), and therefore intentionally include long-term effects.',
                'Engineers SHOULD NOT be pushed to implement short-term solutions which they know will create long-term technical debt problems.',
                'Engineering Teams SHOULD be able to place a high priority on adopting approproiate architectural designs and structures which are flexible and adaptable to potential changes in the future.',
                'Sufficient time and resources MUST be provided to Engineering Teams for long-term considerations',
                'Engineering teams SHOULD avoid optimising too soon, but allow for optimising later when needed.'
            ],
        },
        {
            name: 'People',
            paragraphs: [
                'Engineering Teams MUST be seen as an organic eco-system.',
                'Leaders MUST resist the urge to control the Engineering eco-system, but should provide it with nourishment, and self-care protocals to promote human flourishing.',
                'Leaders MUST trust the sensitivity and intelligence of the individual actors (e.g. Engineers) within the eco-system to create their own Order.',
                'Leaders MUST value the self-correcting autonomy of their Engineering eco-system and resist authoritarian interventions.',
                'Leadership MUST be encoraged from within the system, where leaders arise naturally according to their competencies in the face of current challenges.'
            ]
        },
        {
            name: 'Narrative and Culture',
            paragraphs: [
                'The language of Systems Thinking SHOULD be intentionally included in everyday communications to reinforce cultural adoption.',
                
            ]
        }
    ],
    conclusions: [],
    appendix: [],
    references: [],
    acknowledgements: []
}

export default {
    protocol
}