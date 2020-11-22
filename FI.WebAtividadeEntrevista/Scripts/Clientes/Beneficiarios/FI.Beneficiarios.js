$(document).ready(function () {
    $('#tblBeneficiarios').jtable({
        title: 'Beneficiários',
        actions: {
            listAction: urlClienteList,
        },
        fields: {
            Nome: {
                title: 'Nome',
                width: '50%'
            },
            Email: {
                title: 'CPF',
                width: '35%'
            },
            Alterar: {
                title: '',
                display: function (data) {
                    return '<button onclick="removeBeneficiario(data)" class="btn btn-primary btn-sm">Remover</button>';
                }
            }
        }
    });
})