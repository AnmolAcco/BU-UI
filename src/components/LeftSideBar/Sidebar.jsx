import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Budgets</SidebarTitle>
          <Info>
            <FaInfoCircle style={{ color: "#047BD5" }} /> Recent 7 days content
            budget.
          </Info>
          <SidebarList>
            <SidebarListItem active={true}> <DateText>7/11/22</DateText> <Status>Active</Status> </SidebarListItem>
            <SidebarListItem> <DateText>6/1/22</DateText>  <Status>Past</Status> </SidebarListItem>
            <SidebarListItem> <DateText>1/13/22</DateText> <Status>Past</Status> </SidebarListItem>
            <SidebarListItem> <DateText>4/1/22</DateText>  <Status>Past</Status> </SidebarListItem>
            <SidebarListItem> <DateText>4/19/22</DateText> <Status>Past</Status> </SidebarListItem>
            <SidebarListItem> <DateText>11/3/21</DateText> <Status>Past</Status> </SidebarListItem>
            <SidebarListItem> <DateText>3/18/21</DateText> <Status>Past</Status> </SidebarListItem>
            <SidebarListItem> <DateText>1/13/21</DateText> <Status>Past</Status> </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
