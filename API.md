# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StableDiffusion <a name="StableDiffusion" id="cdk-stable-diffusion.StableDiffusion"></a>

#### Initializers <a name="Initializers" id="cdk-stable-diffusion.StableDiffusion.Initializer"></a>

```typescript
import { StableDiffusion } from 'cdk-stable-diffusion'

new StableDiffusion(scope: Construct, id: string, props: StableDiffusionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-stable-diffusion.StableDiffusion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-stable-diffusion.StableDiffusion.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-stable-diffusion.StableDiffusion.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-stable-diffusion.StableDiffusionProps">StableDiffusionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-stable-diffusion.StableDiffusion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-stable-diffusion.StableDiffusion.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-stable-diffusion.StableDiffusion.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-stable-diffusion.StableDiffusionProps">StableDiffusionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-stable-diffusion.StableDiffusion.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-stable-diffusion.StableDiffusion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-stable-diffusion.StableDiffusion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-stable-diffusion.StableDiffusion.isConstruct"></a>

```typescript
import { StableDiffusion } from 'cdk-stable-diffusion'

StableDiffusion.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-stable-diffusion.StableDiffusion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-stable-diffusion.StableDiffusion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-stable-diffusion.StableDiffusion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### StableDiffusionProps <a name="StableDiffusionProps" id="cdk-stable-diffusion.StableDiffusionProps"></a>

#### Initializer <a name="Initializer" id="cdk-stable-diffusion.StableDiffusionProps.Initializer"></a>

```typescript
import { StableDiffusionProps } from 'cdk-stable-diffusion'

const stableDiffusionProps: StableDiffusionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-stable-diffusion.StableDiffusionProps.property.environment">environment</a></code> | <code>string</code> | *No description.* |

---

##### `environment`<sup>Required</sup> <a name="environment" id="cdk-stable-diffusion.StableDiffusionProps.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---



