<template>
  <section id="tools">
    <v-container fluid class="pt-15 pb-15 mt-10">
      <v-row align="start" justify="center">
        <v-col cols="10">
          <v-row align="start" justify="center">
              <v-col cols="12" md="8">
                <h1>
                  Tools:
                </h1>
                <p>The aim is to provide a range of tools to give insight into ways we can 
                  measure and improve our Software Engineering environements from a People 
                  First perspective.
                </p>
                <p>These won't be the kind of form filling checkbox tools which are often used 
                  to monitor and measure people's performance and adherance to policy.  These 
                  will be the kind of tools Software Engineers would want to use in order to 
                  improve their experience of developing.
                </p>
                <p>Just as Engineers would choose to use tools such as Slack, and GitHub, 
                whether they are corporate policy or not, the hope is that here you will find 
                tools you will freely choose to use, regardless of whether they are adopted by 
                the organisation you work in.
                </p>
                <p>Items in the toolkit will include:</p>
                <h3>
                  One-to-ones Framework:
                </h3>
                <p>Structure and online forms to frame our discussions so that managers and Engineers 
                  can make the most of your one-to-one check-ins.</p>
                <h3>
                  FLOW:
                </h3>
                <p>Reflecting on your experience of work through a tool to self-report the various FLOW 
                  states you had during the last sprint or a recent bout of work. Were you mostly in 
                  FLOW or did constant interruptions and time pressures put you in a state of anxiety?</p>
                  <p>
                    The tool will be based on the ideas in this article at: 
                    <a href="https://purplelabs.eagleeye.com/blog/triggering-the-flow-state-for-software-engineers">Triggering the Flow State in Software Engineers</a>
                  </p>
                  <h3>
                  Achievements Log and Career Progression Tracker:
                </h3>
                <p>A tool to give you, a normie Software Engineer, a little more control over your career 
                  progression. Helping you keep a record of acheivements, set your own objectives and inspiration, 
                  and build a strong evidenced based case for career progression.
                  </p>
                  <h3>
                  Professional Development Plans - PDPs:
                </h3>
                <p>Online PDPs providing structure to discussions around personal development, guiding the thinking by using the instrinsic personal motivators of 
                  Mastery, Autonomy and Relatedness.
                  </p>
                  <h3>
                  Relationships Mapper:
                </h3>
                <p>A tool to understand the quality of our inter-relationships based around the lines of communication 
                  highlighted by Brooks' Law.  Quarterly reviews and legacy management has an emphasis on personal performances, 
                  but this ignores the aspects of collective intelligence which are the important factor in building software collaboratively. 
                  This tool will help us to review relationships, the important lines of communication between the people we depend upon. 
                  </p>
                  <p>Further Brooks' Law insights at<a href="https://www.leadingagile.com/2018/02/applying-brooks-law/">Brooks' Law</a></p>
                  <h3>
                  Team Sentiment Assessments and other survey based tools:
                </h3>
                <p>The ability to intermittently asses how we are doing as a team, getting feedack and visibility on 
                  trends on how effective we are as a team, and the levels of joy or misery in the team experience.
                  </p>
                <h3>
                  Decision Support:
                </h3>
                <p>A framework for collaborating on decisions. A process for collecting the important assumptions, arguments and considerations for a decision, 
                  'Steel Manning' alternative arguments, allowing for construcitve descent, to collectively make wiser decisions with less time wasted and less 
                  confrontation.
                  </p>
                <h3>
                  Meeting Taxonomies, Protocols and Feedback
                </h3>
                <p>Meeting support tools to plan and execute meetings with a People First mindset. Meetings don't have to be an ennervating drag, 
                  make them engaging, efficient and productive - get feedback and change the format if they're not working.
                </p>
              </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" md="8" align="center" justify="center">
              <quote
                quote="I suppose it is tempting, if the only tool you have 
                is a hammer, to treat everything as if it were a nail."
                attributionName="Abraham Maslow "
                attributionDetails="The Psychology of Science, 1966"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <foot/>
    </v-container>
  </section>
</template>

<style scoped>
h3 {
  margin-top:45px
}
</style>

<script>
import foot from '../components/Footer.vue'
import quote from '../components/Quote.vue'

export default {
  components: {
    quote,
    foot
  },
  data: () => ({
    //
  })
}
</script>

