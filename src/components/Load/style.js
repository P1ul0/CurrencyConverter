import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(185,215,0);
  background: linear-gradient(340deg, rgba(185,215,0,1) 15%, rgba(41,45,3,1) 62%);
`

export const Load = styled.div`
  height: 80px;
  width: 80px;
  border: var(--border-width) solid black;
  background: rgb(41,45,3);
  background: linear-gradient(308deg, rgba(41,45,3,1) 0%, rgba(185,215,0,1) 100%);
  transform: rotate(45deg);
  border-radius: 0 50% 50% 50%;
  position: relative;
  box-shadow: 10px 0 10px rgba(0,0,0,0.8);
  animation: move 0.5s linear infinite alternate-reverse;

&::before {
  content: "";
  position: absolute;
  height: 55%;
  width: 55%;
  border-radius: 50%;
  border: var(--border-width) solid transparent;
  border-top-color: white;
  border-bottom-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes move {
  to {
    transform: translateY(15px) rotate(45deg);
  }
}
`