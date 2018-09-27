import React, { Component } from "react";

class Pagination extends Component {
    paginas = () =>{
        let posts = 10;
        let total = Math.ceil(posts/3);  //tres posts por pagina

        let init = 1;
        let end = 10;

        if(total <= 10) {
            end = total;
        }
        let lista = [];

        let barra= () => {
            for (let i = init; i < end; i++) {
                lista = lista.concat(
                    <th key={i}>
                        {i}
                    </th>
                )
            }
            return lista;
        }
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            {barra()}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
                
        
    }
    render() {
        return(
            <div>
                <h4>Paginacion</h4>
                {this.paginas()}
            </div>
        )
    }
}

export default Pagination;