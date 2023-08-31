function cantidadHijosElemento() {
    let lista = document.getElementById('bloque')
    alert('La cantidad de hijos de tipo elemento del div es:' + lista.children.length)
}

function countChildNodes(divId) {
    const div = document.getElementById(divId);
    const childNodeCount = div.childNodes.length;
    alert(`El número de nodos hijos en el div ${divId} es: ${childNodeCount}`);
  }
  function countElementNodes() {
    const allElements = document.querySelectorAll('*');
    alert(`El número de nodos de tipo elemento en el documento es: ${allElements.length}`);
  }

