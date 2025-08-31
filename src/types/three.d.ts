import { Material } from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      hologramMaterial: React.PropsWithChildren<Partial<Material> & { ref?: any; color?: any }>;
    }
  }
}
