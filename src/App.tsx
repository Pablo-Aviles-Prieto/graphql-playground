import { gql, useQuery } from '@apollo/client';

// const GET_EVENTS = gql`
//   query Eventos {
//     eventos(idioma: "es", categoria: "1417054416724") {
//       Archivo_Imagen
//       Contacto
//       Coordenada_X
//       Coordenada_Y
//       Cuerpo
//       Definicion
//       Direccion
//       Entradilla
//       Familia
//       FechaFin
//       FechaInicio
//       Horario
//       Organizador
//       PrecioSuceso
//       Teletaquilla
//       Titulo
//       id
//       idTraduccion
//     }
//   }
// `;

const GET_LAUNCHES = gql`
  query {
    launches(limit: 100, offset: 10, sort: "mission_name", order: "DESC") {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name
        site_name_long
      }
      rocket {
        rocket_name
      }
      details
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  console.log('loading', loading);
  console.log('error', error);
  console.log('data', data);

  return (
    <div className='w-full h-[100vh] bg-slate-800 text-slate-50'>
      hello world
    </div>
  );
};

export default App;
