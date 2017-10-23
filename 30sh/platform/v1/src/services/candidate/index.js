export default (req, res) => {
    return res.render('candidate/resume/resume-form-wizard', {
        title: 'Cadastro do candidato',
        title_page: 'Resume'
    });
}