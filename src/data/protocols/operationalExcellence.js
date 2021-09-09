const protocol = {
    name: 'Operational Excellence',
    ref: 'PFE-7',
    keyName: 'operationalExcellence',
    status: 'draft', //draft, review, accepted, deprecated, abandoned
    intent: [
        'The intent is to apply an culture of Continuous Improvement to proactively remove waste and bottlenecks from the Software Development LifeCycle, making it smoother and faster so that the human experience of building and deploying code is continually optimised.'
    ], //why is this needed
    definitions: [], //nothing should be ambiguous
    overview: [], //context, big picture scenarios
    sections: [
        {
            name: 'Culture',
            paragraphs: [
                'Operational Excellence MUST be embedded culturally in the organisation, understood and supported throughout the formal hierarchy.',
                'The langauage and narrative of Operational Excellence and Continual Improvement SHOULD be commonly used to encourage a mindset of Operational Excellence',
                'The Human Experience MUST be at the heart of Operational Excellence and MUST NOT focus solely on throughput efficiencies.',
                'Diversity of thinking perspectives SHOULD be encouraged in order to holistically evaluate Operational imperfections.',
                'Fail Fast, Fail Often, and Fail Forward thinking MAY be adopted to speed up the detection of Operational imperfections'
            ],
        },
        {
            name: 'Continuous Improvement',
            paragraphs: [
                'Bottlenecks and Waste in the SDLC SHOULD be identified and addressed in cycles of Continuous Improvement.',
                'A cadence of regular Retrospectives SHOULD be scheduled to collaboratively identify common root causes of Bottlenecks and Waste.',
                'Retrospectives MUST adhere to Psychological Safety protocols.'
            ],
        },
        {
            name: 'Metrics and Measurement',
            paragraphs: [
                'Metrics from all departments SHOULD be aligned with the strategy of Operational Excellence.',
                'The Human Experience of building and deploying code SHOULD be included in the metrics.',
            ],
        },
        {
            name: 'Task Prioritisation',
            paragraphs: [
                'Actions for reducing Bottlenecks and Waste SHOULD be assigned in the short-term. They SHOULD NOT go to the to the end of the queue in the Backlog.',
                'Continuous Improvement actions MUST at least have parity with functional improvements in terms of prioritisation.',
            ],
        },
        {
            name: 'Product and Processes',
            paragraphs: [
                'Product and Processes SHOULD avoid wasteful complexity. Simplicity in design is key to Operational Excellence.',
                'Sufficient Hygiene Time SHOULD be allocated to cleansing code issues and process simplification.',
                'Multiple quality gates and big releases SHOULD be minimised. Little and often releases with automated rollback SHOULD be favoured.'
            ],
        },
        {
            name: 'Infrastructure and Tooling',
            paragraphs: [
                'Engineers SHOULD be supported in TOIL reduction to automate manual process where appropriate.',
                'It SHOULD be easy for Engineers to focus on building, testing and deploying code without unnecessary worries over infrastructure and tools.',
                'Sufficient Hygiene Time SHOULD be allocated to stabilising platform and infrastructure '
            ],
        },
        {
            name: 'Ownership',
            paragraphs: [
                'Engineers SHOULD be able to take end-to-end Ownership their contributions within the SDLC',
                'Engineers MUST take Ownership of Bottlenecks and Waste within their domain, proactively thinking about aleviating their felt pain from imperfect processes or systems.',
                'Engineers MUST be empowered to propose ideas and actions around improvement potential because they are best positioned to see the faults.'
            ],
        },
        {
            name: 'People and Relationships',
            paragraphs: [
                'Bad relationships MUST be seen as a major source of bottlenecks and waste',
                'People\'s blindspots, mood variations and natural human limitations MUST be viewed as a majour cause of Operational Imperfections',
                'Understanding human psychology and navigating difficult relationships SHOULD have a high priotiy when striving for Operational Excellence.',
                'Coaching and mentoring to optimise Engineer Soft Skills SHOULD be provided on a regular cadence.'
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