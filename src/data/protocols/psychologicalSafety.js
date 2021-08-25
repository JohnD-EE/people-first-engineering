/*
const protocol = {
    name: '',
    ref: '',
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
    references: [
        { description: '', site: '', url: ''}
    ],
    acknowledgements: []
}

export default {
    protocol
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
                'Psychological Safety MUST be allowed to be adopted naturally, by trying it out, getting it wrong, and trying again.'
            ]
        },
        {
            name: 'Speaking up',
            paragraphs: [
                'People SHOULD feel they can be candid. Honest and straight talking.',
                'People SHOULD be encouraged to suggest things, even if their ideas are not fully formed.',
                'People MUST NOT feel like they need to conceal concerns or suggestions.',
                'People MUST NOT fear shame or ridcule for taking the risk to speak up.',
                'People MUST NOT be reprimanded or punished for making a mistake or screwing up.',
                'Constructive dissent SHOULD be encouraged.',
                'Questioning authority SHOULD be encouraged.',
                'We MUST NOT limit the number of times a person can ask WHY?',
                'People SHOULD be given time to make their point, and to start again if they do not feel they\'ve articulated themselves well',
                'Psychological Safety MUST NOT be used as an excuse to be rude or disrespectful.',
            ]
        },
        {
            name: 'Power',
            paragraphs: [
                'A person\'s lower status in a formal hierarchy MUST NOT affect their right to question someone, repeatedly if necessary, with a higher formal status. Might is not right.',
            ]
        },
        {
            name: 'Risk',
            paragraphs: [
                'People SHOULD feel permitted to take risks, and fail if necessary, on the path to trying to do something brilliant.',
            ]
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