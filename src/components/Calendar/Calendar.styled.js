import { DayPicker } from 'react-day-picker'
import styled from 'styled-components'

export const Calendar = styled.div`
    width: 182px;
    margin-bottom: 20px;
`
export const CalendarTtl = styled.p`
    margin-bottom: 14px;
    padding: 0 7px;

    color: ${({ theme }) => theme.text};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`

export const CalendarDate = styled(DayPicker)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // margin-top: 14px;
    margin: 0 0px;
    // padding: 0 10px;

    background-color: #ffffff;
    color: #94a6be;

    .rdp {
        margin: 0em;
    }

    .rdp-caption_label {
        color: #94a6be;
        font-size: 14px;
        line-height: 25px;
        font-weight: 600;
    }
    .rdp-cell {
        width: 22px;
        height: 22px;
        margin: 2px;
        border-radius: 30%;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        color: #94a6be;
        font-size: 12px;
        line-height: 1;
        letter-spacing: -0.2px;
        cursor: pointer;
    }
    .rdp-button_reset.rdp-button.rdp-day {
        width: 22px;
        height: 22px;
        font-size: 12px;
    }
    p {
        width: 100%;
        height: 22px;
        font-size: 12px;
    }
`

export const CalendarPeriod = styled.div`
    padding-top: 20px;
    p {
        color: #94a6be;
        font-size: 10px;
        line-height: 1;
        span {
            color: ${({ theme }) => theme.text};
        }
    }
`
