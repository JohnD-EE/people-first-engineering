/*
const model = {
    name: '',
    ref: '',
    keyName: '',
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
    whenToUse: [], //scenarios and use cases
    conclusions: [],
    references: [
        { num: '', description: '', site: '', url: ''}
    ]
}

export default {
    model
}
*/

const model = {
    name: 'Most Respectful Interpretation',
    ref: 'mri',
    keyName: 'mri',
    status: 'draft', //draft, review, accepted
    intent: [], //why is this needed
    definitions: [], //nothing should be ambiguous
    overview: ['We are often triggered to react negatively to people\'s words and actions, we may feel attacked personally or be apalled by the other person\'s ethics. In the moment we feel angry, upset, or disgusted with them. Applying the Most Respectful Interpretation, generously assuming their actions are well intented, will likely yield more desireable outcomes for you and anyone else in the situation.'], //context, big picture scenarios
    sections: [
        {
            name: 'Examples',
            paragraphs: [
                {type: 'list', items: [
                'You\'ve sent an important or urgent email to a colleague but didn\'t get a response.',
                'A fellow Engineer seems disorganised and lazy, they seem so sloppy, they fail to follow the coding standards and you feel like they just don\'t care enough',
                'You\'ve submitted a Pull Request for a Code Review.  You\'re colleague rips it to shreds - leaving critical comments everywhere. You feel you are being unfairly attacked.  You feel angry, as if your colleague is deliberately victimising you.',
                'A Product Owner keeps questioning you. "Why are you building it this way?", "Why is it taking so long?", Why? Why? Why? - You feel undermined, as if they don\'t trust you.',
                
                ]},
                'In each of these scenarios it is natural to assume malicious intent and respond angrily.',
                'However, you don\'t know the true intent of the other person:',
                {type: 'list', items: [
                    'Perhaps the email you sent simply hadn\'t been seen or your colleague has been up to their eyeballs in a demanding project',
                    'Perhaps your disorganised, lazy, and uncaring colleague has a different cognitive style to you and struggles in certain areas, they need coaching rather than criticism',
                    'Perhaps you critical code reviewer is genuinely trying to help but bad at expressing their comments kindly',
                    'Perhaps the Product Owner with a million questions is simply wanting to learn and understand your perspective but is just a little clumsy with their style of questioning.'
                ]}
                
            ],
        },
        {
            name: 'Exceptions',
            paragraphs: [
                'some people do have malicious intent, they may be sociopathic, or they are making political manaouvres to trip you up. They may even hate you.',
                'The world can be a nasty place at times, but the MRI model advises taking the high ground, to look for the tiniest shred of positive intent.',
                'If there is genuine mal-intent then it is probably pointless to respond in the moment, your adversary is looking to stir up drama and is provoking a reactin. Be the smarter and more patient combatant'
            ]
        },
        {
            name: 'Root Cause Analysis',
            paragraphs: [
                'Perception is subjective. We cannot objectively derive another person\'s intent.',
                'Everyone has their own mental map of reality, a simplified map which filters things according to our innate biases. No matter how hard we try, we can never interpret an event completely accurately.',
                'We are often time pressured, we have to make quick judgements and quick decision. Pressurised judgements and decisions are always imperfect.',
                'An Evolutionary Psychology perspective may point out that we are hard-wired to detect threats. We look for the evil intent because that is an inherreted survival trait.',
                'At the physiological level, our primal fight, flight or freeze response is triggered at the slightest hint of feeling attacked. This accute stress response uses our homonal and nuerotransmitter systems to put us in a state of hyperarousal to help us deal with the perceived threat. ',
                'When our status is challenged, when we lose in a dominance dispute, our seritonergic response makes us feel deflated or depressed.',
                'We are often ignorant to how our reactions arise, we don\'t step back and think, we respond in the moment.',
                'Unchecked, our reactions become habitual. We fall for the same triggers over and over again.',
                'Our life experiences will determine our sensitivities to threats. If we\'ve had harsh and stressful experiences, especially in childhood, we may be more likely to be on guard for threats, and more likely to be triggered by percieved threats. Everyone is unique, we all perceive the world differently.'
            ]
        },
        {
            name: 'Strategies',
            paragraphs: [
                'Give people the benefit of the doubt',
                'Make kind allowances',
                'Assume people are doing their best',
                'Ignore and walk away',
                'Assertively and calmly explain how it made you feel and that you realise it probably wasn\'t their intent. Ask for clarification of their intent.',
                'Explain how it made you feel and that your intial reaction was to respond angrily, share a link to this page and explain how you\'re trying to apply MRI.',
                'Pause before responding - feelings are like the weather, they will pass. The momentary fight, flight or freeze condition cannot persist.',
                'Perhaps the other person is lashing out at the world - they are in a tight spot, stressed - maybe they just need a bit of kindness, a bit of love.',
                'Rememember that any blow to our status, our repetutation or credibility can tremendously hurt in the moment. But it is just in the moment.',
                'Consider the drama triangle.  Don\'t go looking for a hero, perhaps your manager, to rescue you.  If you feel you are being persecuted then try to avoid the temptation to play victim.',
                'Use it as a learning opportunity, you are simply gaining information about another person\'s style so you can try different approaches to yield different results in the future.',
                'Remember that Humans would not have survived in evolutionary psychology, without being wired for empathy.',
                'Use your brain.  Challenge yourself to write down as many generous interpretations of the person\'s comms as possible.  Realise your own habitual patterns of thinking and responding. Be creative.',
                'Dominance disputes are natural, be a detatched observer - if you feel defeated, use it as an opportunity for regrowth.',
                'If you cannot resist the urge to respond in the moment, write out your response in a note pad.  write it to yourself, sit with it for a while, and delete it.',
                'Consider whether your feelings towards someone are Psychological Projection. When we see evil in others, we are often project the darker side of our own personality on them.  The line of good and evil runs through the heart of every man.',
                'Remember that some people have a very clumsy style, or are simply sarcastic, or blunt, or just bad at expressing themselves. Try to distinguish clumsiness from genuine malevolence.',
                'Be guided by Hanlon\'s law - "Never attribute to malice what can be explained by carelessness or stupidity"',
                'Understand that people have different perspectives, and different Moral Tastebuds.',
                'Resist the urge to share with others.  Gossiping is so tempting - look what she did to me - if you do need to share with others, do it in a constructive way - be descrete and constructive, seek advice and strategies rather than seeking to suprress or shame the other person.',
                'Even silence or non-response from the other person can be interpreted as hostility, but consider the alternatives, assume the best.  Perhaps they are badly organised, perhaps they are overwhelmed, perhaps your email was treated as spam.',
                'Even if you are sure your colleague has malicious intent, and is engaging in the worst sculduggery, respond as if you are giving the most respectful interpretation rather than creating a feedback loop which makes your life worse.'
            ]
        }

    ],
    whenToUse: [],
    conclusions: [],
    references: [],
}

export default {
    model
}