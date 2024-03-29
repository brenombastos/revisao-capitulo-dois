import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    
    table{
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }
        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--tabela-cor);
            border-radius: 0.25rem;
            color: var(--text-body);
            font-weight: 600;
            
            &:first-child{
            color: var(--text-title);
            }
            &.deposit{
                color: var(--green)
            }
            &.withdraw{
                color: var(--red)

            }
        }
    }
`;