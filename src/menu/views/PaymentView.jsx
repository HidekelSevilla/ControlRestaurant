
export const PaymentView = () => {
    return (
        <Grid
            container
            position={showedSidebar ? 'relative' : 'absolute'}
            right={showedSidebar ? '' : '0'}

            alignItems='center'
            justifyContent={'center'}

            sx={{ minHeight: 'calc(104vh - 110px)', backgroundColor: 'primary.main', p: 4, borderRadius: 6, }}
        >
        </Grid>
    )
}
