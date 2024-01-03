export const FormatDate = (date: Date) => {
    return `${date.toLocaleDateString('default', { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' })} ${date.toTimeString().slice(0, 8)}`;
}