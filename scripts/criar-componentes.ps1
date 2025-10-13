try {
    Write-Host "Criando componentes com a Angular CLI..."

    npx ng g c components/navbar --skip-tests --style=none
    npx ng g c components/banner --skip-tests --style=none
    npx ng g c components/sobre --skip-tests --style=none
    npx ng g c components/habilidades --skip-tests --style=none
    npx ng g c components/icones-habilidades --skip-tests --style=none
    npx ng g c components/portfolio --skip-tests --style=none
    npx ng g c components/contato --skip-tests --style=none

    Write-Host "Todos os componentes foram criados com sucesso!"
}
catch {
    Write-Error "Um dos comandos falhou: $_"
    exit 1; # terminou a execucao de forma nao padrao
}