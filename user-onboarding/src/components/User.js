import React from 'react'
import styled from 'styled-components'
const StyledUser = styled.div`
    font-family:monospace;

`

export default function User ({details}){
    if(!details) {
        return <h3>Fetching user</h3>
    }

    return(
        <StyledUser>
          <h2>{details.name}</h2>
          <p>Email:{details.email}</p>
          <p>Role:{details.role}</p>
        </StyledUser>

    )
}