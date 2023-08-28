router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong routes!'));

module.exports = router;
