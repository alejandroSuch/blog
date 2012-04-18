@Grab(group='com.github.groovy-wslite', module='groovy-wslite', version='0.7.0')
import wslite.soap.*

def client = new SOAPClient('http://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCallejero.asmx')
def response = client.send(
        SOAPAction:'http://tempuri.org/OVCServWeb/OVCCallejero/ConsultaMunicipio',
        """<?xml version="1.0" encoding="utf-8"?>
                <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                  <soap:Body>
                    <Provincia xmlns="http://www.catastro.meh.es/">ALACANT</Provincia>
                  </soap:Body>
                </soap:Envelope>"""
)

response.envelope.Body.Municipios.consulta_municipiero.municipiero.muni.each{
    println "--------- ${it.nm} ---------"
    println "Cartografía: ${it.carto}"
    println "Código MHAP: ${it.locat}"
    println "Código INE: ${it.loine}"
    println "----------------------------"
    println ""
}