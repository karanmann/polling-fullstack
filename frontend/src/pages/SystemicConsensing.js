import React from 'react'

import { 
  LinkBorderContainer,
  Container} from '../lib/Styling'

export const SystemicConsensing = () => {
  return (
    <>
     <Container>
        <LinkBorderContainer>
          <h1 className='heading'>Sytemic consensing</h1>
          <p className='about-text'>
            Systemic consensing is a way of making decisions in a group. It can be used in any situation
            as long as the decision is made between several alternatives.
          </p>
          <p className='about-text'>
            Instead of looking for the alternative with the strongest support, systemic consensing looks for the alternative
            with least resistance. This way, you'll find the alternative that has a broad support in the whole group instead 
            of forcing parts of the group to follow what a majority decided. It leads to more consensus and less conflicts.
          </p>
          <h2 className='heading2'>How it works</h2>
          <p className='about-text'>
            Instead of choosing a favourite option, everyone in the group can give between 0 and 10 "objection points"
            to all alternatives. 0 means absolutely no resistance, i.e. complete agreement with the solution or proposal. 
            — "I have no objection, I support this proposal strongly." 10 means maximum resistance, i.e. total objection. 
            — "I have huge objections, I refuse this proposal heavily." In the end, you sum up the objection points for each 
            option. The one with least points is the one that has least resistance, i.e. strongest support in the group. 
          </p>
          <h2 className='heading2'>Example</h2>
          <p className='about-text'>
            Imagine, Ann, Bob and Cecilia want to have dinner together and are discussing which restaurant to go to. 
            Ann proposes a steak house, because steak is her favourite food. Bob likes pizza and suggests an Italian place. 
            Cecilia doesn't eat meat and proposes a vegan restaurant. 
          </p>
          <p className='about-text'>
            Ann votes 0 objection points for the steak house, as it was her own suggestion. But she is sceptical towards the vegan
            food and gives it 8 points. Pizza is somewhere in between, 4 points. 
          </p>
          <p className='about-text'>
            Bob loves the pizza option, so 0 points there. But he could also imagine trying out the other two places and gives them 
            3 points each - not as good as pizza, but still okay. 
          </p>
          <p className='about-text'>
            Cecilia won't eat meat and gives the steak house 10 objection points. The vegan place gets 0 from her but she would be fine
            with pizza as well, so 2 points there. 
          </p>
          <p className='about-text'>
            In the end, the Italian restaurant has least objection points, and in fact Ann, Bob and Cecilia spend a nice evening there
            and all of them enjoy the food. 
          </p>
          <p className='about-text'>
            Our three friends might have come to this conclusion even without objection points. 
            But what can be pretty obvious in a group of three can become much more complicated in larger groups. 
            In those situations, systemic consensing helps to find the option that works for all. 
          </p>
          <h2 className='heading2'>Learn more</h2>
          <p className='about-text'>
            This is just a short introduction to the basic principle of systemic consensing and there is more to think about. 
            If you want to know more about the theory behind it and how else to use it, have a look here.
            <ul>
              <li>
                <a href='https://www.plays-in-business.com/systemic-consensing-what-the-hell-is-this/'>An introduction</a>
              </li>
              <li>
                <a href='https://systemicconsensus.blogspot.com/2012/11/white-paper-systemic-consensing-first.html'>A more detailed blog article</a>
              </li>
              </ul>
          </p>
        </LinkBorderContainer>
      </Container>
    </>
  )
}