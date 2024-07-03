import React from 'react'
import "./boardmembers.css"
import {erah, executivedirector, executivedirector2, boardchairman,folashade, ringya, organs} from "../../imports"


const boardMembers = [
  {
    img: boardchairman,
    name: "Ngwakwe Williams",
    position: "Board Chairman",
    intro: "Ngwakwe Williams is a dedicated development specialist with a profound commitment to empowering communities. He holds a Bachelor of Science degree in Geology from Kogi State University. Originally from Abia State, Williams brings a unique perspective to his work in civil society organizations. As a passionate team player, he wholeheartedly believes in the vision and mission of these organizations, actively engaging in initiatives that drive success and create meaningful impacts. His innovative and strategic mindset makes him an invaluable asset, especially in projects involving young people, children, and individuals living with disabilities. With a strong dedication to making a difference, Williams is poised to contribute significantly to the development sector."
  },

  {
    img: executivedirector,
    name: "Nneoma Caroline Akano",
    position: "Executive Director",
    intro: "Mrs. Nneoma Caroline Akano stands as a dynamic force in the field of empowerment and education. As the Executive Director of De Pathway360 Empowerment Initiative, she dedicates herself to fostering growth and development within her community. Mrs. Akano, a devoted wife and mother, boasts an impressive academic background with a B.A.Ed in English and an M.A. in Literature from the University of Port Harcourt, Rivers State, Nigeria, completed in 2001 and 2011, respectively. She further enhanced her expertise by earning a PGD in Communication and Media Studies from the Nigeria Institute of Journalism, Lagos, in 2019, and is currently pursuing a doctoral degree. With over a decade of teaching experience in public secondary education, Mrs. Akano has honed her skills as an educator, bringing a wealth of knowledge and passion to the classroom. Beyond teaching, she is an accomplished entrepreneur and co-founder of Carolex Resources Ltd, amidst other companies. Her leadership also extends to the travel industry as a consultant and is also a member of the National Association of Nigeria Travel Agents. Mrs. Akano's deep analytical and counseling abilities have enabled her to guide individuals of all ages through life's challenges. Her compassionate approach and philosophy of helping people realize their full potential underpin her initiatives. Through De Pathway360 Empowerment Initiative, she strives to create an egalitarian society where everyone is empowered to contribute meaningfully to the development of society."
  },

  {
    img: folashade,
    name: "Folashade Olajuyin",
    position: "Board Member",
    intro: "Folashade Olajuyin is a dynamic professional seamlessly balancing roles as a wife, mother, author, and lawyer. A law graduate from the University of Ado Ekiti, she excels in the legal field while also dedicating herself to personal development. Certified also as a life coach, neuro-linguistic programming (NLP) practitioner, and emotional intelligence expert, Folashade empowers individuals and organizations to reach their full potential. Through her writing and coaching, she inspires growth, resilience, and transformation, making her a unique and engaging figure in both the legal and personal development arenas."
  },
  
  {
    img: ringya,
    name: "Ringya Ibrahim",
    position: "Board member",
    intro: "Mrs. Ringya Ibrahim Rindap is a dedicated wife and mother, whose professional and academic achievements are truly commendable. A distinguished accounting postgraduate from the University of Abuja, Ringya combines her financial acumen with a profound passion for health and wellness. She has pursued several certifications in various health modules from the United Kingdom, showcasing her commitment to continuous learning and personal growth. Mrs. Ringya has a passion for stimulating social change, always wanting to leave people and places better than she met them. she currently resides in the United Kungdom with her family."
  },
  // {
  //   img: erah,
  //   name: "Victor Erah",
  //   position: "Unknown"
  // }
]

const staff = [
  {
    img: executivedirector2,
    name: "Okechukwu Akano",
    position: "Monitoring and Evaluation Officer",
    intro: "Okechukwu Akano is a dynamic entrepreneur known for his outstanding leadership and unwavering dedication to both business and community service. With a diverse portfolio of thriving businesses, Okechukwu has proven himself as a visionary leader who can navigate and succeed in various sectors. His entrepreneurial spirit is complemented by his deep love for God, as he passionately ministers the gospel and inspires others through his faith. Okechukwu’s commitment to impacting lives is evident in his numerous contributions to community growth and development. He believes in the power of collective progress and actively engages and supports initiatives that uplift and empower others. His sound leadership qualities have seen him lead various groups across different sectors, earning him respect and admiration from peers and community members alike. A graduate of business, Okechukwu holds various certifications that attest to his expertise and dedication to continuous learning. His academic background provides a solid foundation for his entrepreneurial ventures, ensuring they are grounded in sound business principles and practices. He is also a devoted family man, happily married and blessed with lovely children."
  },
]

const Boardmembers = () => {
  return (
    <div className='boardmembers-div'>
        <p className='meetboard-txt'>Meet Our Board Members</p>

        <div>
          <div className='members-div'>
            {
              boardMembers.map((member) => (

                <div className='memberdetails-div'>
                  <div>
                  <img className='members-picture' src= {member.img} alt="" />
                  <p className='member-name'>{member.name}</p>
                  <p className='member-position'>{member.position}</p>
                  </div>

                  <div className='memberintro-div'>
                  <p className='member-intro'>{member.intro}</p>
                  </div>
                </div>
              ))
            }
          </div>

          <p className='meetboard-txt'>Meet Our Staff</p>
          <div>
            <div className='members-div'>
              {
                staff.map((staff) => (
                  <div className='memberdetails-div'>
                    <div>
                      <img className='members-picture' src={staff.img} alt="" />
                      <p className='member-name'>{staff.name}</p>
                      <p className='member-position'>{staff.position}</p>
                    </div>

                    <div className='memberintro-div'>
                  <p className='member-intro'>{staff.intro}</p>
                  </div>
                  </div>
                ))
              }
            </div>

          </div>
        </div>

        <>
        <p className='aboutuspageheader-txt'>The Organs</p>
            <p>
            The Organs

            Our organization has three main organs: the Board of Trustees, Advisory Board, and Management.

            The Board of Trustees and Advisory Board of DePathway360 Empowerment Initiative comprises seven members, including three females and four males. This board serves as the organization's decision-making body, convening annually to assess performance, approve programs, and establish budgets.

            The Management team oversees the execution of decisions and manages the day-to-day operations. This team is led by the Executive Director (ED), who is also a member of the Board. Additionally, the Management includes the Project Implementation Body and Support Staff, ensuring effective implementation and support for our initiatives.
            </p>
            {/* </p> */}


            <div className='organ-container'>
            <img className='organ-img' src= {organs} alt="" />
            </div>
            </>
    </div>
  )
}

export default Boardmembers