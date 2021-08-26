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
        'The intent is to provide an environment where conventions MAY be challenged, difficult questions MAY be asked, and where one\'s status or hierarchical dominance MUST NOT be a barrier the pursuit of truth. It SHOULD provide a secure environment for taking risks, for trying, and failing if necessary, in the pursuit of a worthy goal.'
    ],
    definitions: [
        'Psychological Safety MUST NOT be interpreted as a \'Kum ba yah\' environment where everyone nicely agrees with each other.',
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
                'Sharing bad news SHOULD be easy',
                'People SHOULD NOT experience stress over how they convey a message for fear of how it may land, they SHOULD be able to say what they think in the moment.',
                'If people feel they are not being listend to, they SHOULD be able to re-assert themselves without consequences.',
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
                'A person\'s lower status in a formal hierarchy MUST NOT affect their right to question someone, repeatedly if necessary, with a higher formal status.',
            ]
        },
        {
            name: 'Risk',
            paragraphs: [
                'People SHOULD feel permitted to take risks, and fail if necessary, on the path to trying to do something brilliant.',
                'People MUST feel able to fearlessly risk inviting feedback and criticism from anyone',
                'A culture of "Yes Men" or the emergence of Groupthink MUST NOT be tollerated'
            ]
        },
        {
            name: 'Leadership',
            paragraphs: [
                'Leaders MUST consciously be approachable with any concern or suggestion.',
                'High status leaders MUST appreciate they may be wrongly perceived as being unapproachable by lower status people and SHOULD make extra effort to be approachable. Status MUST NOT be a barrier to approachability.',
            ]
        },
        {
            name: 'Culture',
            paragraphs: [
                'A culture of Toxic Positivity MUST be recognised as antithetical to Psychological Safety.',
                'Psychological Safety SHOULD be regularly promoted as part a People First Organisational culture'
            ]
        },
        {
            name: 'Scope',
            paragraphs: [
                'Psychological Safety SHOULD be practiced both internally within the organisation, and in external relationships.',
            ]
        },
        {
            name: 'Uncertainty',
            paragraphs: [
                'Answering a question with \'I don\'t know\' MUST be acceptable.',
            ]
        },
        {
            name: 'Accountability',
            paragraphs: [
                '',
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