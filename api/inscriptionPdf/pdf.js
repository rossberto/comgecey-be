const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document
const doc = new PDFDocument;

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('output.pdf'));

/***********************************/
/************** HEADER *************/
/***********************************/
doc.image('cncmg_quality.png', 70, 25, {width: 150});

doc.fontSize(18);
doc.text('SOLICITUD DE CERTIFICACIÓN EN MEDICINA GENERAL', 245, 60, {
  align: 'center'
});

/***********************************/
/***** FICHA DE IDENTIFICACIÓN *****/
/***********************************/
//lineOffset = 0;
const lineStart = 70; //+ lineOffset;
const lineEnd = 620 - lineStart;

const firstSectionY = 130;
const spaceBetweenSections = 92;
const spaceBetweenRows = 32;
const spaceBetweenTextLine = 2;

doc.fontSize(16);
doc.text('Ficha de Identificación', 70, firstSectionY);

doc.moveTo(lineStart, firstSectionY + spaceBetweenRows)    // set the current point
   .lineTo(lineEnd, firstSectionY + spaceBetweenRows)      // draw a line
   .stroke();
doc.fontSize(10);
doc.text('Apellido Paterno                               Apellido Materno                              Nombre', 70, firstSectionY + spaceBetweenRows + spaceBetweenTextLine, {
  align: 'center'
});

doc.moveTo(lineStart, firstSectionY + 2*spaceBetweenRows)    // set the current point
   .lineTo(lineEnd, firstSectionY + 2*spaceBetweenRows)      // draw a line
   .stroke();
doc.fontSize(10);
doc.text('Fecha de Nacimiento                            Lugar de Nacimiento                              Teléfono', 70, firstSectionY + 2*spaceBetweenRows + spaceBetweenTextLine, {
  align: 'center'
});

/***********************************/
/*****   DOMICILIO PARTICULAR  *****/
/***********************************/
doc.fontSize(16);
doc.text('Domicilio Particular', 70, firstSectionY + spaceBetweenSections);

doc.fontSize(10);

doc.moveTo(lineStart, firstSectionY + spaceBetweenSections + spaceBetweenRows)    // set the current point
   .lineTo(lineEnd, firstSectionY + spaceBetweenSections + spaceBetweenRows)      // draw a line
   .stroke();
doc.text('                    Calle                                             Número                                               Colonia', 70, firstSectionY + spaceBetweenSections + spaceBetweenRows + spaceBetweenTextLine);

doc.moveTo(lineStart, firstSectionY + spaceBetweenSections + 2*spaceBetweenRows)    // set the current point
   .lineTo(lineEnd, firstSectionY + spaceBetweenSections + 2*spaceBetweenRows)      // draw a line
   .stroke();
doc.text('                Ciudad                              Estado                              CP', 70, firstSectionY + spaceBetweenSections + 2*spaceBetweenRows + spaceBetweenTextLine);

//
/***********************************/
/*****   DOMICILIO PARTICULAR  *****/
/***********************************/
doc.fontSize(16);
doc.text('Domicilio de Correspondencia', 70, firstSectionY + 2*spaceBetweenSections);

doc.fontSize(10);

doc.moveTo(lineStart, firstSectionY + 2*spaceBetweenSections + spaceBetweenRows)    // set the current point
   .lineTo(lineEnd, firstSectionY + 2*spaceBetweenSections + spaceBetweenRows)      // draw a line
   .stroke();
doc.text('                    Calle                                             Número                                               Colonia', 70, firstSectionY + 2*spaceBetweenSections + spaceBetweenRows + spaceBetweenTextLine);

doc.moveTo(lineStart, firstSectionY + 2*spaceBetweenSections + 2*spaceBetweenRows)    // set the current point
   .lineTo(lineEnd, firstSectionY + 2*spaceBetweenSections + 2*spaceBetweenRows)      // draw a line
   .stroke();
doc.text('                Ciudad                              Estado                              CP                              Email', 70, firstSectionY + 2*spaceBetweenSections + 2*spaceBetweenRows + spaceBetweenTextLine);

/***********************************/
/***** INFORMACIÓN PROFESIONAL *****/
/***********************************/
doc.fontSize(16);
doc.text('Información Profesional', 70, firstSectionY + 3*spaceBetweenSections);

doc.fontSize(10);

doc.moveTo(lineStart, firstSectionY + 3*spaceBetweenSections + spaceBetweenRows)    // set the current point
   .lineTo(lineEnd, firstSectionY + 3*spaceBetweenSections + spaceBetweenRows)      // draw a line
   .stroke();
doc.text('Escuela o facultad donde estudió la licenciatura y universidad a la que pertenece', 70, firstSectionY + 3*spaceBetweenSections + spaceBetweenRows + spaceBetweenTextLine, {
  align: 'center'
});
doc.moveTo(lineStart, firstSectionY + 3*spaceBetweenSections + 2*spaceBetweenRows)    // set the current point
   .lineTo(lineEnd, firstSectionY + 3*spaceBetweenSections + 2*spaceBetweenRows)      // draw a line
   .stroke();
doc.text('Fecha de inicio                                         Fecha de terminación', 70, firstSectionY + 3*spaceBetweenSections + 2*spaceBetweenRows + spaceBetweenTextLine, {
  align: 'center'
});

doc.moveTo(lineStart, firstSectionY + 3*spaceBetweenSections + 3*spaceBetweenRows)    // set the current point
   .lineTo(lineEnd, firstSectionY + 3*spaceBetweenSections + 3*spaceBetweenRows)      // draw a line
   .stroke();
doc.text('Sitio donde realizó el internado (localidad y nombre del hospital e institución a la que pertenece)', 70, firstSectionY + 3*spaceBetweenSections + 3*spaceBetweenRows + spaceBetweenTextLine, {
  align: 'center'
});
doc.moveTo(lineStart, firstSectionY + 3*spaceBetweenSections + 4*spaceBetweenRows)    // set the current point
   .lineTo(lineEnd, firstSectionY + 3*spaceBetweenSections + 4*spaceBetweenRows)      // draw a line
   .stroke();
doc.text('Fecha de inicio                                         Fecha de terminación', 70, firstSectionY + 3*spaceBetweenSections + 4*spaceBetweenRows + spaceBetweenTextLine, {
  align: 'center'
});

doc.moveTo(lineStart, firstSectionY + 3*spaceBetweenSections + 5*spaceBetweenRows)    // set the current point
   .lineTo(lineEnd, firstSectionY + 3*spaceBetweenSections + 5*spaceBetweenRows)      // draw a line
   .stroke();
doc.text('Sitio en donde realizó el servicio social (coloque el nombre de la localidad e institución)', 70, firstSectionY + 3*spaceBetweenSections + 5*spaceBetweenRows + spaceBetweenTextLine, {
  align: 'center'
});
doc.moveTo(lineStart, firstSectionY + 3*spaceBetweenSections + 6*spaceBetweenRows)    // set the current point
   .lineTo(lineEnd, firstSectionY + 3*spaceBetweenSections + 6*spaceBetweenRows)      // draw a line
   .stroke();
doc.text('Fecha de inicio                                         Fecha de terminación', 70, firstSectionY + 3*spaceBetweenSections + 6*spaceBetweenRows + spaceBetweenTextLine, {
  align: 'center'
});

doc.moveTo(lineStart, firstSectionY + 3*spaceBetweenSections + 7*spaceBetweenRows)    // set the current point
   .lineTo(lineEnd, firstSectionY + 3*spaceBetweenSections + 7*spaceBetweenRows)      // draw a line
   .stroke();
doc.text('Fecha en que presentó su examen profesional              Tipo de examen (oral y/o escrito)', 70, firstSectionY + 3*spaceBetweenSections + 7*spaceBetweenRows + spaceBetweenTextLine, {
  align: 'center'
});
doc.moveTo(lineStart, firstSectionY + 3*spaceBetweenSections + 8*spaceBetweenRows)    // set the current point
   .lineTo(lineEnd, firstSectionY + 3*spaceBetweenSections + 8*spaceBetweenRows)      // draw a line
   .stroke();
doc.text('Tesis recepcional (anote el nombre si realizó tesis)', 70, firstSectionY + 3*spaceBetweenSections + 8*spaceBetweenRows + spaceBetweenTextLine, {
  align: 'center'
});
doc.moveTo(lineStart, firstSectionY + 3*spaceBetweenSections + 9*spaceBetweenRows)    // set the current point
   .lineTo(lineEnd, firstSectionY + 3*spaceBetweenSections + 9*spaceBetweenRows)      // draw a line
   .stroke();
doc.text('Número de cédula profesional        Fecha de expedición      Libro y fojas num.       Registro en la SSA', 70, firstSectionY + 3*spaceBetweenSections + 9*spaceBetweenRows + spaceBetweenTextLine, {
  align: 'center'
});

doc.addPage();

/***********************************/
/************** HEADER *************/
/***********************************/
doc.image('cncmg_quality.png', 70, 25, {width: 150});

doc.fontSize(18);
doc.text('SOLICITUD DE CERTIFICACIÓN EN MEDICINA GENERAL', 245, 60, {
  align: 'center'
});

doc.fontSize(10);
const date = new Date();

const year = date.getFullYear().toString();

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
         'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const month = months[date.getMonth()];

const day = date.getDate().toString();

doc.text(day + ' de ' + month + ' del ' + year, 70, 150, {
  align: 'right'
});

doc.moveDown();

doc.fontSize(14);
doc.text('H. COMITÉ DE CERTIFICACIÓN DEL CONSEJO NACIONAL DE CERTIFICACIÓN EN MEDICINA GENERAL, A.C.', 70, 200, {
  align: 'justify'
});
doc.text('Presente.')

doc.moveDown();

const nombreCompleto = 'Ernesto Medina Lopez';

const H_1 = `El (La) que suscribe, ${nombreCompleto}, indica:\nRequiero muy atentamente ` +
             'se acepte mi solicitud para someterme al proceso de Certificación en ' +
             'Medicina General que realiza el Consejo, conforme a la Convocatoria ' +
             'expedida para tal efecto.';

const H_2 = 'Expreso que esta solicitud es voluntaria, por lo que anexo a mi solicitud ' +
            'la documentación comprobatoria acerca de los estudios realizados y de mi ' +
            'actividad profesional, los cuales son copias fotostáticas de los originales ' +
            'que obran en mi poder, y acepto sean investigados y calificados por los ' +
            'Comités correspondientes.';

const H_3 = 'Asimismo, de resultar certificado, me comprometo a respetar los lineamientos ' +
            'del Consejo y a cumplir con el requisito de Renovación de la Vigencia del ' +
            'Certificado cada 5 años, como la mejor manera de garantizar a la sociedad ' +
            'mi competencia académica y profesional.';

const H_4 = 'Acepto cubrir la cuota que solicita el Consejo y que la misma no se me ' +
            'reintegrará en caso de no resultar certificado.';

doc.fontSize(12);

doc.text(H_1, {
  align: 'justify'
});
doc.moveDown();
doc.text(H_2, {
  align: 'justify'
});
doc.moveDown();
doc.text(H_3, {
  align: 'justify'
});
doc.moveDown();
doc.text(H_4, {
  align: 'justify'
});


doc.text('A T E N T A M E N T E', 70, 600, {
  align: 'center'
});


doc.text('______________________________', 70, 650, {
  align: 'center'
});
doc.text(nombreCompleto, 70, 670, {
  align: 'center'
});


// Finalize PDF file
doc.end();
