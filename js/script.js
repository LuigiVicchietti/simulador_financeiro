const qtd_pdt = document.getElementById('input_qtd_pdt')
    , valor_pdt = document.getElementById('input_vlr_pdt')
    , div_resposta = document.getElementById('div_resp')
    , btn_submit = document.getElementById('btn_submit')
    , div_retorno = document.getElementById('retorno');

function calcularLucro() {
    qtd_produto = Number(qtd_pdt.value)
        , valor_produto = Number(valor_pdt.value)
        , mult_qtd_vlr = (qtd_produto * valor_produto)
        , perda_producao = (mult_qtd_vlr * 0.28)
        , perda_manejo = (mult_qtd_vlr * 0.22)
        , perda_mercado = (mult_qtd_vlr * 0.17)
        , ganho_atual = (mult_qtd_vlr - (perda_producao + perda_manejo + perda_mercado))
        , ganho_futuro = (mult_qtd_vlr + ganho_atual)
        , lucro = Math.round(((ganho_futuro - ganho_atual) / ganho_futuro) * 100);

    div_resposta.innerHTML = `Estimamos um lucro aproximado de <span style="color: green; font-weight: bold;">R$${Math.round(ganho_atual)} reais</span> por mês com nosso sistema!`
    div_retorno.innerHTML += `${mult_qtd_vlr} para <span style="color: green;">${ganho_futuro}</span> (<span style="color: green;">${lucro}%!</span>) <br> <br>`
}

btn_submit.addEventListener('click', calcularLucro);