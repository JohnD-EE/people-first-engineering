<template>
  <section id="home">
    <v-container fluid class="pt-15 pb-15 mt-10">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="start" justify="center">
              <v-col cols="3">
                <v-card>
                  <v-img
                    src="@/assets/JohnD-Pic.jpg"
                    height="250"
                    contain
                    class="primary"
                  ></v-img>
                  <v-card-title class="text-h6 secondary white--text">
                    John Durrant
                    <v-row
          align="center"
          justify="end"
        >
        <v-btn
          href="https://www.linkedin.com/in/johndurrant/"
          target="_blank"
          icon
          dark
        >
          <v-icon class="white--text">mdi-linkedin</v-icon>
        </v-btn>
        </v-row>
                  </v-card-title>
                  
                </v-card>
              </v-col>
              <v-col cols="1">
                </v-col>
              <v-col cols="8">
                <h1 class="font-weight-regular mb-3">
                  About:
                </h1>
                <p>I've created PEOPLE FIRST ENGINEERING because during my recent tenure as 
                  Head of the Software Engineering department during the scale-up stage of Eagle Eye 
                  Solutions, a SaaS company in digital promotions and loyalty, as well as in previous 
                  management roles, I always wished there was a toolkit I could grab to tackle the 
                  various situations I'd encounter.
                </p>
                <p>
                  Eagle Eye were extremely supportive of my insistence 
                  to emphasise the human experience at work, and to assert the voices of the Software Engineers 
                  in my department. I introduced the idea of reguarly monitoring people's self reported 
                  FLOW States and am grateful for the support and wider adoption it received.</p>
                  <p>See my blog post: 
                  <a href="https://purplelabs.eagleeye.com/blog/triggering-the-flow-state-for-software-engineers">
                  Triggering the Flow State for Software Engineers</a></p>
                <p>With this projet I am aiming to create some tools to gain insights in the social dynamics between people, or standardised 
                  principles for convivial and productive working relationships. I often read 
                  about interesting ideas and concepts, perhaps in the realm of Systems Thinking or 
                  some deep Psychological or Philosophical piece on the nature of human beings, but 
                  I sometimes stuggle when trying to articulate these ideas for consideration by people less open to such radical ideas.</p>
                
                <h3>
                  A Personal Muse:
                </h3>
                <p>So this is a personal project to collate, filter, and articulate the thoughts, 
                  ideas, and learnings I've had on my journey. It has been bubbling in my mind for a 
                  while and I'm keen to selfishly dedicate some deep thinking time to bring my thinking 
                  to life in these pages.</p>
                <p>This will be an ongoing 'Work in Progress'. The principles and models I introduce will 
                  be open source so anyone can copy, critique and contribute. The tools section will be built out 
                  overtime, with some tools being free to use, and others paid for.
                </p>
                <h3>
                  Work should be joyful:
                </h3>
                <p>Perhaps joyful is a stretch, but we only live once and we spend a large proportion 
                  of our allotted time in work. If you are unfilfilled and disatisfied in your work 
                  it can permeate into other areas of your life and become a wider problem. Work 
                  environments can sometimes be toxic and soul destroying, causing untold '9 to 5' 
                  Groundhog Day misery for millions.</p>
                <p>I believe we owe a moral duty to our employees to earnestly strive to make work 
                  as engaging and deeply rewarding as possible. The creative process of building 
                  this website has for me been a joy, I've been in a state of FLOW, enjoying 
                  thinking about the content and structure even when I'm away from my laptop, 
                  and that's a desirable human experience we all benefit from seeing in the workplace.</p>
                <h3>
                  Software Engineering:
                </h3>
                <p>In the right environment, building software can be a creative, joyful experience where 
                  we apply our craftmanship, during long bouts of uniterrupted time, with clear requirements 
                  in mind to building applications that serve some kind of beneficial purpose in the world.
                </p>
                <p>In the wrong environmnet, wading through old convoluted untestable spaghetti code, dealing with 
                  ambiguous requirements and impossible time pressures, and frustrated colleagues, it can be 
                  a joyless, soul sapping chore.
                </p>
                <p>It's our collective duty to make Software Engineering a joyful and smooth experience.</p>
              </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" md="8" align="center" justify="center">
              <quote
                quote="
I didn't get where I am today without knowing there's no fun in getting where I am today."
                attributionName="C.J. "
                attributionDetails="The Fall and Rise of Reginald Perrin"
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

