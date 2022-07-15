import React, { useContext, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../App";
const SidebarContainer = styled.div`
  flex: 2;
  background-color: #fafafa;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  color: #212121;
`;
const SidebarWrapper = styled.div`
  padding-top: 10px;
`;
const SidebarMenu = styled.div`
  margin-bottom: 2px;
  padding-right: 2px;
`;
const SidebarTitle = styled.h3`
  font-size: 20px;
  margin-top: 0;
`;
const Info = styled.div``;
const SidebarList = styled.ul`
  list-style: none;
`;
const DateText = styled.span``;
const Status = styled.span`
  padding-right: 10px;
`;
const SidebarListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-left: -40px;
  padding: 20px 0 20px 10px;
  justify-content: space-between;
  &:hover {
    background-color: white;
    border-left: 5px solid #047bd5;
    margin: 1px 1px 1px -35px;
  }
  ${({ active }) => `
    background-color: ${active && `#FFF`};
    border-left: ${active && `5px solid #047BD5`};
  `};
`;
function Sidebar() {
  const { headerName, activeDate, setActiveDate } = useContext(AppContext);
  const dates = [
    { date: "7/11/22", id: 1 },
    { date: "6/1/22", id: 2 },
    { date: "1/13/22", id: 3 },
    { date: "4/1/22", id: 4 },
    { date: "4/19/22", id: 5 },
    { date: "11/3/21", id: 6 },
    { date: "3/18/21", id: 7 },
  ];
  useEffect(() => {
    setActiveDate(dates[0]);
  }, []);

  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>{headerName}</SidebarTitle>
          <Info>
            <FaInfoCircle style={{ color: "#047BD5" }} /> Recent 7 days content
            budget.
          </Info>
          <SidebarList>
            {dates.map((e) => ( 
              <>
                <SidebarListItem
                  active={activeDate?.id === e?.id}
                  onClick={(event) => setActiveDate(e)}
                > 
                  <DateText>{e.date}</DateText>
                  <Status>
                    {activeDate?.id === e?.id ? "Active" : "Past"}
                  </Status>
                </SidebarListItem>
              </>
            ))}
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
