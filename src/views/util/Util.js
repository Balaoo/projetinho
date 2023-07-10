import { toast } from "react-toastify";

export const formatarData = (dataParam) => {

    if (dataParam === null || dataParam === '' || dataParam === undefined) {
        return ''
    }

    let dia = dataParam[2];
    if (dia < 10) { dia = '0' + dia }
    
    let mes = dataParam[1];
    if (mes < 10) { mes = '0' + mes }

    let ano = dataParam[0];
    let dataFormatada = dia + '/' + mes + '/' + ano;

    return dataFormatada
}

export const notify = (mensagem) => toast(mensagem, {
    position: toast.POSITION.TOP_CENTER
});

export const notifyInfo = (mensagem) => toast.info(mensagem, {
    position: toast.POSITION.TOP_CENTER
});

export const notifyWarn = (mensagem) => toast.warn(mensagem, {
    position: toast.POSITION.TOP_CENTER
});

export const notifySuccess = (mensagem) => toast.success(mensagem, {
    position: toast.POSITION.TOP_CENTER
});

export const notifyError = (mensagem) => toast.error(mensagem, {
    position: toast.POSITION.TOP_CENTER
});

export const mensagemErro = "Ocorreu algum erro inesperado."