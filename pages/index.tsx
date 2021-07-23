import Head from 'next/head';
import { useState } from 'react';

import { Badge, Tag, Card, Button } from '~/components/ui';
import { Footer, HStack, VStack } from '~/components/layout';


export default function Home() {
  const [badges, setBadges] = useState([
    "Culiacán",
    "Envio a domicilio",
    "Sucursal Aeropuerto"
  ]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto px-4'>
        <div className="mb-10">
          <h4 className="mb-4">Cards</h4>
          <hr className="mb-4" />
          <h5 className="mb-4">Simple Card</h5>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <VStack>
                <h5>¿Necesitas dinero?</h5>
                <p>Obtén un préstamo personal y fácil</p>
                <Button theme="primary" text="Solicitar Préstamo" size="small" />
              </VStack>
            </Card>
            <Card>
              <VStack>
                <h5>Paga en línea</h5>
                <p>Obtén un préstamo personal y fácil</p>
                <Button theme="primary" text="Solicitar Préstamo" size="small" />
              </VStack>
            </Card>
            <Card>
              <VStack>
                <h5>Gana más con Vales</h5>
                <p>Obtén un préstamo personal y fácil</p>
                <Button theme="primary" text="Solicitar Préstamo" size="small" />
              </VStack>
            </Card>
            <Card>
              <VStack>
                <h5>Visítanos en nuestras sucursales</h5>
                <p>Obtén un préstamo personal y fácil</p>
                <Button theme="primary" text="Solicitar Préstamo" size="small" />
              </VStack>
            </Card>
          </div>
        </div>
        <div className="mb-10">
          <h4>VStack/HStack &amp; Tags</h4>
          <VStack>
            <HStack spacing="sm">
              <Tag label="Cadenas de diamante" />
              <Tag label="Crucifijo" />
              <Tag label="Dije de oro" />
              <Tag label="Dije de plata" />
            </HStack>
            <HStack>
              <Tag label="Relojes" />
              <Tag label="Correas de reloj" />
            </HStack>
          </VStack>
        </div>
        <div>
          <h4>Badges</h4>
          <VStack>
            <HStack spacing="sm">
              <Badge label="Culiacán" />
              <Badge label="Envio a domicilio" />
              <Badge label="Sucursale Aeropuerto" />
            </HStack>
            <HStack spacing="sm">
              {badges.map(badge => (
                <Badge
                  closable
                  key={badge}
                  label={badge}
                  onClick={() => {
                    const newBadges = badges.filter(label => label !== badge);
                    setBadges(newBadges);
                  }}
                />
              ))}
            </HStack>
          </VStack>
        </div>
      </main>
      <Footer />
    </div>
  );
}
