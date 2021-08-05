/*
const protocol = {
    name: '',
    keyName: '',
    status: '', //draft, review, accepted, deprecated, abandoned
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
*/

const protocol = {
    name: 'Psychological Safety',
    ref: 'PFE-1',
    keyName: 'psychologicalSafety',
    status: 'draft',
    intent: [
        'The intent is to provide an environment where conventions may be challenged, difficult questions may be asked, and where one\'s status is not a factor in the pursuit of truth. It provides a secure environment for taking risks, for trying and failing if necessary in the pursuit of a worthy goal.'
    ],
    definitions: [
        'Psychological Safety is not a \'Kum ba yah\' environment where everyone nicely agrees with each other.',
    ],
    overview: [],
    sections: [
        {
            name: 'Enforcement',
            paragraphs: [
                'A culture of Psychological Safety MUST NOT be imposed by an entity external to the group, or by anyone within the group.',
            ]
        },
        {
            name: 'Questioning',
            paragraphs: [
                'Psychological Safety MUST NOT be used as an excuse to be rude or disrespectful'
            ]
        },
    ],
    conclusions: [],
    appendix: [],
    resources: [],
    acknowledgements: []
}


export default {
    protocol
}