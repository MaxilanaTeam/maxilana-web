import cn from 'classnames';
import React, { FC } from 'react';
import { DownOutlined, PhoneOutlined, WhatsAppOutlined, SelectOutlined } from '@ant-design/icons';
import { BranchSchedule, CircleLink } from '~/components/Branches';
import { Button, Card } from '~/components/ui';
import useToggleState from '~/hooks/useToggleState';
import { Branch } from '~/types/Models/Branch';

import styles from './BranchCard.module.css';
import slugify from '~/utils/slugify';

interface Props {
  data: Branch;
}

const BranchCard: FC<Props> = ({ data }) => {
  const [showDetails, toggleDetails] = useToggleState(false);
  return (
    <Card className={showDetails ? styles.expanded : ''}>
      <div className={styles.heading}>
        <h3 className={styles.name}>{data.name}</h3>
        <button onClick={() => toggleDetails()} className={styles.toggle}>
          <DownOutlined />
        </button>
      </div>
      <div className="space-y-4">
        <p className={styles.address}>{data.address}</p>
        <div className={cn(styles.details)}>
          <div>
            <BranchSchedule branch={data} />
          </div>
          <Button
            text="Ver remates de la tienda"
            fullWidth
            theme="primary"
            href={`/sucursales/${data?.slug || slugify(data.name)}`}
          />
          <div className={styles.contactOptions}>
            <CircleLink href="#" text="Llamar por teléfono" icon={<PhoneOutlined />} />
            <CircleLink href="#" text="Enviar WhatsApp" icon={<WhatsAppOutlined />} whatsapp />
          </div>
          <div className="text-center">
            {data?.constancy && (
              <a
                href={data?.constancy}
                className="text-brand inline-flex items-center space-x-2 hover:underline"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <span>Constancia de inscripción</span>
                <SelectOutlined />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BranchCard;
