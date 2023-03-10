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
        , perda_manejo = ((mult_qtd_vlr - perda_producao) * 0.22)
        , perda_mercado = ((mult_qtd_vlr - perda_manejo) * 0.17)
        , ganho_atual = (mult_qtd_vlr - (perda_producao + perda_manejo + perda_mercado))
        , ganho_futuro = (mult_qtd_vlr + ganho_atual)
        , lucro = Math.round(((ganho_futuro - ganho_atual) / ganho_futuro) * 100);

    div_resposta.innerHTML = `Estimamos um lucro aproximado de <span style="color: green; font-weight: bold;">R$${Math.round(ganho_atual)} reais</span> por mês com nosso sistema!`

    div_retorno.innerHTML = `No mercado de laticínios, é comum a perda de uma certa contia do seu lucro devido problemas internos e externos. <br>
    A perda de laticínios por produção de lote, é de <span style="color: red; font-weight: bold;">28%</span>, de manejo <span style="color: red; font-weight: bold;">22%</span> e mercado <span style="color: red; font-weight: bold;">17%</span> <br>
    Sabendo que a perda por produção, manejo e mercado em sua situação são, respectivamente, <span style="color: red; font-weight: bold;">${Math.round(perda_producao)}%</span>, <span style="color: red; font-weight: bold;">${Math.round(perda_manejo)}%</span> e <span style="color: red; font-weight: bold;">${Math.round(perda_mercado)}%</span>, seu lucro atual é de <span style="text-decoration: underline green;">R$${mult_qtd_vlr}</span> reais por mês. <br> <br>
    Observe o seu lucro mensal: <br> <br>`
    
    div_retorno.innerHTML += `${mult_qtd_vlr} para aproximadamente <span style="color: green;">${Math.round(ganho_futuro)}</span> (<span style="color: green;">${lucro}%!</span>) <br>`
}

btn_submit.addEventListener('click', calcularLucro);