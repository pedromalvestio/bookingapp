import styled from "styled-components";
import { DataView } from "primereact/dataview";

export const ItineraryView = styled(DataView)`
    font-family: 'Open sans';
    .p-dataview-content {
        background: transparent;
    }
    .p-dataview-header {
        background: transparent;
        border: 0;
        padding: 0;
    }
    .p-paginator {
        background: #F5F4F0;
        border: 0;
        padding: 0;
        border-radius: 1rem;
    }
    .p-button {
        font-size: 14px;
        padding: .25rem !important;
        width: 2rem;
        height: 2rem;
    }
`;