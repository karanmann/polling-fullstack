import React, { useState, useRef, useEffect } from 'react'
import Confetti from 'react-confetti'
import styled from 'styled-components/macro'

/* export const About= () => {
  return (
    <>
    <Confetti
      width={300}
      height={800}
      />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum tempora veritatis delectus quas eum. Dignissimos illo aspernatur assumenda porro saepe iste voluptate molestiae hic sint similique, distinctio magni architecto quae pariatur facere recusandae harum ad. Ab assumenda labore qui doloribus vero fugiat necessitatibus tempore reiciendis nulla magni vitae nihil, delectus pariatur voluptatem eveniet! Illo error temporibus ducimus, praesentium officia rerum expedita eligendi aliquam corporis saepe iure ratione soluta et. Odit officia, delectus reiciendis laudantium, eum tempora pariatur perspiciatis minima, explicabo saepe reprehenderit tempore. Veniam quos iste ratione ducimus exercitationem soluta a voluptatem dignissimos obcaecati enim asperiores laborum, aliquid temporibus quis assumenda quia tempora quae magni fuga? Consectetur vero commodi suscipit, laboriosam hic, soluta voluptas ab natus deleniti ea voluptatum officia tempore cumque illo eveniet harum velit veniam quasi nostrum at numquam. Ullam numquam dolores dolorem amet nesciunt, distinctio omnis doloribus eveniet quis, voluptates hic explicabo itaque. Cumque, accusamus saepe tempore veritatis expedita culpa commodi vitae, quisquam architecto itaque distinctio quae deserunt, ad ducimus non quaerat sed harum illo ipsum. Excepturi veritatis nemo non eum saepe facilis ea dignissimos ratione! Iusto, recusandae? Inventore ea corrupti quidem ab rerum possimus magni excepturi doloremque veritatis assumenda sit, hic repellendus, dolorum repellat praesentium. Aliquam?</p>
    </>
  )
} */

const Div = styled.div `
width: auto;
height: 3000px;
`

export const About = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, [])

  const handleShow = toggle => {
    setShow(toggle);
  }

  return (
    <>
      <Div
        onMouseEnter={() => handleShow(true)}
        onMouseLeave={() => handleShow(false)}
        className="confetti-wrap"
        ref={confettiRef}>
          <Confetti
          recycle={show}
          numberOfPieces={500}
          width={width}
          height={height}
        />
      </Div>
    </>
  );
}