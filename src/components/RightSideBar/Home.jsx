import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { MdReplay } from "react-icons/md";
import { AppContext } from "../../App";
const RightPanel = styled.div`
  flex: 8;
`;
const RightPanelWrapper = styled.div`
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  position: relative;
`;
const Heading = styled.h1``;
const Subheading = styled.p`
  font-size: 18px;
`;
const Button = styled.button`
  padding: 10px 35px 10px 35px;
  font-size: 20px;
  border-radius: 10px;

  cursor: pointer;
  ${({ cancel }) => `
    background-color: ${cancel ? `#FFF` : `#047bd5`};
    color: ${cancel ? "#212121" : `#FFF`};
    border: ${cancel ? `1px solid #212121` : `0px`};
  `};
`;
const Slider = styled.div`
  /* for chrome and safari*/
  -webkit-animation-duration: 1s;
  -webkit-animation-name: slidein;

  /*for firefox*/
  -moz-animation-duration: 1s;
  -moz-animation-name: slidein;

  /* for opera*/
  -o-animation-duration: 1s;
  -o-animation-name: slidein;

  /* Standard syntax*/
  animation-duration: 1s;
  animation-name: slidein;
  ${({ direction }) => `
     @-webkit-keyframes slidein {  
    from {
      margin-left: ${direction && direction === "right" ? `0%` : `100%`};
      width: 300%;
    }

    to {
      margin-left: ${direction && direction === "right" ? `100%` : `0%`};
      width: 100%;
    }
  }
  @-moz-keyframes slidein {
    from {
      margin-left:${direction && direction === "right" ? `0%` : `100%`};
      width: 300%;
    }

    to {
      margin-left: ${direction && direction === "right" ? `100%` : `0%`};
      width: 100%;
    }
  }
  @-o-keyframes slidein {
    from {
      margin-left: ${direction && direction === "right" ? `0%` : `100%`};
      width: 300%;
    }

    to {
      margin-left: ${direction && direction === "right" ? `100%` : `0%`};
      width: 100%;
    }
  }
  @keyframes slidein {
    from {
      margin-left: ${direction && direction === "right" ? `0%` : `100%`};
      width: 300%;
    }

    to {
      margin-left: ${direction && direction === "right" ? `100%` : `0%`};
      width: 100%;
    }
  }
  
  `};

  /* @-webkit-keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }

  @-moz-keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
  @-o-keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  } */
`;
const SliderWrapper = styled.div`
  margin-left: 1%;
  margin-top: -15%;
  z-index: 999;
  position: absolute;
  width: 98%;
`;
const SliderContent = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  padding: 10px;
  flex-direction: column;
`;
const Border = styled.div`
  border: 1px solid #212121;
  width: 100%;
  height: 65%;
`;
const HeaderTable = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;
const HeaderText = styled.span`
  font-size: 18px;
  margin-right: 19%;
  font-weight: 600;
  :nth-child(1) {
    margin-right: 23%;
  }
  :nth-child(4) {
    margin-right: 0;
  }
`;
const Divider = styled.hr`
  width: 82%;
  margin-left: 1%;
  background-color: #212121;
  margin-top: 0%;
`;
const Inputholder = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;
const Input = styled.input`
  margin-left: 10px;
  width: 22%;
  height: 5%;
  padding: 2px 10px 2px 10px;
  font-size: 20px;
  border: 2px solid #212121;
  :nth-child(4) {
    width: 4%;
  }
`;
const ReloadIcon = styled.span`
  font-size: 35px;
  margin-left: 10%;
  cursor: pointer;
`;
const LineBreaker = styled.br``;
const ButtonHolder = styled.div`
  padding: 10px;
  display: flex;
  justify-content: right;
  margin-top: 22%;
`;

function Home() {
  const [fields, setFields] = useState({
    BU: "Lifestyle",
    BudgetPercent: 5,
    Budget: 25,
    CurrentUsage: "0.5k",
  });
  const { headerName, setHeaderName, activeDate, setBackgroundColor } = useContext(AppContext);
  const [sliderDirection, setSliderDirection] = useState(null);
  const [totalBudget, setTotalBudget] = useState({
    percent: null,
    amount: null,
  });
  useEffect(() => {
    setTotalBudget({
      percent: fields.BudgetPercent + "%",
      amount: fields.Budget + "K",
    });
    console.log(fields);
  }, [fields]);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setFields((values) => ({ ...values, [name]: value }));
    console.log(fields);
  };
  const resetField = (e) => {
    console.log("here");
    setFields((values) => ({ ...values, ["BudgetPercent"]: "0" }));
  };
  return (
    <RightPanel>
      <RightPanelWrapper>
        <Heading>{headerName}</Heading>
        <Subheading>{`Content budgets for `+ activeDate?.date} </Subheading>
        <Subheading>Total available budget is Rs. 5,00,000.</Subheading>
        <Button onClick={(e) => setSliderDirection("left")}>Edit Budget</Button>
        {sliderDirection && (
          <SliderWrapper>
            <Slider direction={sliderDirection}>
              <SliderContent>
                <Heading>{`Edit ${headerName}`}</Heading>
                <Subheading>Total available budget is Rs. 5,00,000.</Subheading>
                <Border>
                  <HeaderTable>
                    <HeaderText>BU</HeaderText>
                    <HeaderText>Budget (%)</HeaderText>

                    <HeaderText>Budget</HeaderText>
                    <HeaderText>Current Usage</HeaderText>
                  </HeaderTable>
                  <Divider />
                  <Inputholder>
                    <Input readOnly value={fields.BU}></Input>
                    <Input
                      name="BudgetPercent"
                      value={fields && fields.BudgetPercent}
                      onChange={(e) => handleChange(e)}
                    />
                    <Input
                      name="Budget"
                      defaultValue={fields.Budget}
                      onChange={(e) => handleChange(e)}
                    />
                    <Input readOnly value={fields.CurrentUsage}/>
                    <ReloadIcon onClick={(e) => resetField(e)}>
                      <MdReplay />
                    </ReloadIcon> 
                  </Inputholder> 
                  <LineBreaker />  
                  <Divider />  
                  <LineBreaker />  
                  <Divider />  
                  <Inputholder>  
                    <Input readOnly value={"Total Budget"}></Input>
                    <Input readOnly value={totalBudget.percent}></Input>
                    <Input readOnly value={totalBudget.amount}></Input>
                    <Input readOnly value={"0.5k"}></Input>
                  </Inputholder>
                  <ButtonHolder>
                    <Button
                      style={{ marginRight: "20px" }}
                      onClick={(e) => {
                        setSliderDirection("right");
                        setSliderDirection(null);
                      }}
                    >
                      Submit
                    </Button>
                    <Button
                      cancel={true}
                      onClick={(e) => {
                        setSliderDirection("right");
                        setSliderDirection(null);
                      }}
                    >
                      Cancel
                    </Button>
                  </ButtonHolder>
                </Border>
              </SliderContent>
            </Slider>
          </SliderWrapper>
        )}
        <Button onClick={(e) => setHeaderName("Teams")}>
          Show Teams Panel
        </Button>
      </RightPanelWrapper>
    </RightPanel>
  );
}

export default Home;
