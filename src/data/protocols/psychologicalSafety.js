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
        'The intent is to provide an environment where conventions MAY be challenged, difficult questions MAY be asked, and where one\'s status or hierarchical dominance MUST NOT be a barrier to the pursuit of truth. It SHOULD provide a secure environment for taking risks, for trying, and failing if necessary, in the pursuit of a worthy goal.'
    ],
    definitions: [
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
            name: 'Misinterpretations',
            paragraphs: [
                'Psychological Safety MUST NOT be interpreted as a \'Kum ba yah\' environment where everyone nicely agrees with each other.',
            ]
        },
        {
            name: 'Speaking up',
            paragraphs: [
                'Engineers SHOULD feel they can be candid. Honest and straight-talking.',
                'Engineers SHOULD be encouraged to suggest things, even if their ideas are not fully formed.',
                'Engineers MUST NOT feel like they need to conceal concerns or suggestions.',
                'Engineers MUST NOT fear shame or ridicule for taking the risk to speak up.',
                'Engineers MUST NOT be reprimanded or punished for making a mistake or screwing up.',
                'Sharing bad news SHOULD be easy.',
                'Engineers SHOULD feel able to ask for help, at any time.',
                'Engineers SHOULD NOT experience stress over how they convey a message for fear of how it may land, they SHOULD be able to say what they think in the moment.',
                'If Engineers feel they are not being listened to, they SHOULD be able to re-assert themselves without consequences.',
                'Constructive dissent SHOULD be encouraged.',
                'Questioning authority SHOULD be encouraged.',
                'We MUST NOT limit the number of times an Engineer can ask WHY?',
                'Engineers SHOULD be given time to make their point and to start again if they do not feel they\'ve articulated themselves well',
                'Psychological Safety MUST NOT be used as an excuse to be rude or disrespectful.',
            ]
        },
        {
            name: 'Power',
            paragraphs: [
                'A person\'s lower status in a formal hierarchy MUST NOT affect their right to question someone, repeatedly if necessary, with a higher formal status.',
                'Dominance disputes, status jockeying, and office politics SHOULD be accepted as natural human behaviour, even when striving for Psychological Safety, but we SHOULD feel comfortable speaking directly to people engaging in such behaviours if Psychological Safety is threatened.'
            ]
        },
        {
            name: 'Risk',
            paragraphs: [
                'Engineers SHOULD feel permitted to take risks and fail if necessary, on the path to trying to do something brilliant.',
                'Engineers MUST feel able to fearlessly risk inviting feedback and criticism from anyone',
                'Engineers SHOULD feel free to innovate with playful curiosity',
                'Engineers SHOULD feel comfortable about taking on stretch projects, pushing themselves beyond their comfort zones.',
                'Engineers SHOULD feel listened to when venturing ideas, even partially formed ideas SHOULD be explored.'
            ]
        },
        {
            name: 'Leadership',
            paragraphs: [
                'Leaders MUST accept that a Psychologically Safe environment will not emerge on its own, it must be consciously and diligently supported.',
                'Leaders MUST consciously be approachable with any concern or suggestion, through clearly defined channels of communication, actively listening to feedback and advice, paraphrasing what they\'ve heard to confirm understanding.',
                'High-status leaders MUST appreciate they may be wrongly perceived as being unapproachable by lower-status people and SHOULD make extra effort to be approachable. Status MUST NOT be a barrier to approachability.',
                'Leaders MUST consciously be prepared to be open about their own vulnerabilities and fallibilities rather than having all the answers.',
                'Leaders MUST set the tone of Psychological Safety by leading with empathy.',
                'Leaders SHOULD model an atmosphere of trust between their peers and their teams.',
                'Leaders SHOULD engage in Adult to Adult relationships, to model desired organisational communication styles.',
                'Leaders MUST accept their accountability for mistakes when they inevitably get things wrong.'
            ]
        },
        {
            name: 'Culture',
            paragraphs: [
                'A culture of Toxic Positivity MUST be recognised as antithetical to Psychological Safety.',
                'Psychological Safety SHOULD be regularly promoted as part a People First Organisational culture',
                'The organisation SHOULD acknowledge that an Engineer\'s previous experiences may predominantly be in Psychologically Unsafe settings and therefore the Psychologically Safe culture must be vigilantly reinforced.',
                'The culture SHOULD feel inclusive.',
                'Blame should not be tolerated',
                'The culture SHOULD be an organisational one, not just in Software Engineering.',
                'The culture SHOULD encourage and celebrate curiosity',
                'A culture of "Yes Men" or the emergence of Groupthink MUST NOT be tolerated'
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
                'Ambiguity or politically sensitive topics MUST NOT be avoided but navigated with sensitivity.',
                'It MUST be safe to say "I don\'t know"',
            ]
        },
        {
            name: 'Accountability',
            paragraphs: [
                'Engineers SHOULD be fully accountable for their actions.',
                'Mistakes MUST be viewed as an opportunity to improve, as a Learning Organisation, through Blameless Postmortems or other appropriate methods.',
                'The organisation MUST accept that if mistakes are covered up, they are more likely to be repeated.',
                'Engineers MUST be held accountable for reminding each other when Psychological Safety is not being followed.'
            ]
        },
        {
            name: 'Impact',
            paragraphs: [
                'Psychological Safety SHOULD reduce errors and improve quality.',
                'Psychological Safety SHOULD improve team cohesion and performance.',
                'Psychological Safety SHOULD improve creativity and innovation.',
                'Psychological Safety SHOULD improve accountability.',
                'Psychological Safety SHOULD improve inclusivity.',
                'Psychological Safety SHOULD reduce gossip, backstabbing, or sabotage.',
                'Organisational wellbeing SHOULD improve.'
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