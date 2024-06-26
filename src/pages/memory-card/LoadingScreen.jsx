import styled from "styled-components"

const LoadingScreenStyle = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;

  p {
    font-size: 20px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 8px;
    border-radius: 24px;
  }

  .ball-spinner {
    position: relative;
    height: 100px;
    width: 100px;
    background: linear-gradient(to bottom, rgb(254, 0, 1) 50%, white 50%);
    border-radius: 50%;
    border: 8px solid black;
    animation: spin 1s linear infinite;
    box-sizing: content-box;
  }

  .ball-spinner::before {
    content: "";
    position: absolute;
    height: 8px;
    width: 100px;
    background: black;
    top: 50px;
    transform: translateY(-50%);
  }

  .ball-spinner::after {
    content: "";
    position: absolute;
    height: 38px;
    width: 38px;
    border-radius: 50%;
    background-color: white;
    top: 50px;
    left: 50px;
    transform: translate(-50%, -50%);
    box-shadow: inset 0 0 0 8px black, inset 0 0 0 10px white,
      inset 0 0 0 12px black;
  }

  /* Spin Animation */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export default function LoadingScreen() {
  console.log("Enter LoadingScreen");
  return (
    <LoadingScreenStyle>
      <div className="ball-spinner" />
      <p>Loading...</p>
    </LoadingScreenStyle>
  )
}