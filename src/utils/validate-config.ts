import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import { ClassConstructor } from 'class-transformer';

export const validateConfig = <T extends object>(
  config: Record<string, unknown>,
  envVariablesClass: ClassConstructor<T>,
): T => {
  // Chuyển đổi đối tượng config thành instance của lớp envVariablesClass
  const validatedConfig = plainToClass(envVariablesClass, config, {
    enableImplicitConversion: true,
    excludeExtraneousValues: true,
  });

  console.log('validatedConfig', validatedConfig);

  // Thực hiện validate (đồng bộ) trên instance được chuyển đổi
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(`Validation failed: ${errors}`);
  }

  return validatedConfig;
};
